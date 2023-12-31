# DEVOPS-DO

## STEPS
### 1. Deploy the basic architecture of the project [repo](https://github.com/wlopezob/devops-do/tree/feature/step-1)
- container registry
- kubernetes
- namespace
- secret dockerconfigjson
- deploy app angular

### 2. Deploy loadbalancer and Ingress Controller With Custom Domain
### 3. Create Azure Pipeline to deploy automatic (CI-CD)

## Commands
### register token DO
```
export DIGITALOCEAN_TOKEN=mytokenpa
```

### start terraform
```
terraform init
```

### create the plan
```
terraform plan -out main.tfplan
```

### execute the plan
```
terraform apply "main.tfplan"
```

### create the plan destroy
```
terraform plan -destroy -out main.destroy.tfplan
```

### execute the plan destroy
```
terraform apply main.destroy.tfplan
```

### execute kubectl with kubeconfig
```
kubectl --kubeconfig=kubeconfig
```
