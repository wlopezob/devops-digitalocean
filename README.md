# DEVOPS-DO

In this project, we will create a Kubernetes cluster on Digital Ocean using Terraform. Next, we will set up our CI/CD using Azure Pipeline with the goal of deploying an Angular application and a custom domain

## STEPS
### 1. Deploy the basic architecture of the project with terraform [repo](https://github.com/wlopezob/devops-do/tree/feature/step-1)
- Set up the container registry.
- Configure Kubernetes, including the creation of a namespace.
- Set up a Docker configuration JSON file and create a secret using it.
- Deploy the Angular application.

### 2. Deploy loadbalancer and Ingress Controller With Custom Domain
### 3. Create Azure Pipeline for automatic deploy  (CI-CD)

## Commands
### register token  Digital Ocean(DO)
```
export DIGITALOCEAN_TOKEN=mytokenpa
```

### Initialize  terraform
```
terraform init
```

### create the terraform plan
```
terraform plan -out main.tfplan
```

### execute the terraform  plan
```
terraform apply "main.tfplan"
```

### create the terraform  plan for destroy
```
terraform plan -destroy -out main.destroy.tfplan
```

### execute the terraform  plan for destroy
```
terraform apply main.destroy.tfplan
```

### execute kubectl with kubeconfig
```
kubectl --kubeconfig=kubeconfig
```
