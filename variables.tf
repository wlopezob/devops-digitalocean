variable "project_name_prefix" {
  type = string
  description = "Prefix project name"
}
variable "location" {
  type = string
}
variable "kubernetes_version" {
  type = string
}
variable "pool_size" {
  type = string
  description = "tamaño de los workers"
}
variable "node_count" {
  type = number
}
variable "registry_secret" {
  type = string
  description = "kubbernetes resource secret docker login"
}
variable "namespace" {
  type = string
  description = "name namespace in kubernetes"
}