# devops-do

## register token DO
export DIGITALOCEAN_TOLEN=mytokenpa

## start terraform
terraform init

## create the plan
terraform plan -out main.tfplan

## exeute the plan
terraform apply "main.tfplan"

## create the plan destroy
terraform plan -destroy -out main.destroy.tfplan

## execute the plan destroy
terraform apply main.destroy.tfplan