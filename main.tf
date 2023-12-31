# Create a new container registry
resource "digitalocean_container_registry" "container-instances" {
  name                   = "${var.project_name_prefix}-ci"
  subscription_tier_slug = "basic"
  region = var.location
}

# Get Docker credentials for your DigitalOcean container registry.
resource "digitalocean_container_registry_docker_credentials" "docker_credentials" {
  registry_name = digitalocean_container_registry.container-instances.name
}

resource "digitalocean_kubernetes_cluster" "k8s" {
  name   = "${var.project_name_prefix}-k8s"
  region = var.location
  # Grab the latest version slug from `doctl kubernetes options versions`
  version = var.kubernetes_version

  node_pool {
    name       = "${var.project_name_prefix}-wk-pool"
    size       = var.pool_size
    node_count = var.node_count
  }
}


provider "kubernetes" {
  host  = digitalocean_kubernetes_cluster.k8s.endpoint
  token = digitalocean_kubernetes_cluster.k8s.kube_config[0].token

  cluster_ca_certificate = base64decode(
    digitalocean_kubernetes_cluster.k8s.kube_config[0].cluster_ca_certificate
  )
  
}

resource "kubernetes_namespace" "namespace" {
  metadata {
    annotations = {
      name = var.namespace
    }
    name = var.namespace
  }
}

resource "kubernetes_secret" "registry-secret" {
  metadata {
    name = var.registry_secret
    namespace = var.namespace
  }

  data = {
    ".dockerconfigjson" = digitalocean_container_registry_docker_credentials.docker_credentials.docker_credentials
  }

  type = "kubernetes.io/dockerconfigjson"
}