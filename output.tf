resource "local_file" "kubeconfig" {
  depends_on = [ digitalocean_kubernetes_cluster.k8s ]
  filename = "config"
  content = digitalocean_kubernetes_cluster.k8s.kube_config[0].raw_config
}