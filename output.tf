resource "local_file" "kubeconfig" {
  depends_on = [ digitalocean_kubernetes_cluster.k8s ]
  filename = "kubeconfig"
  content = digitalocean_kubernetes_cluster.k8s.kube_config[0].raw_config
}