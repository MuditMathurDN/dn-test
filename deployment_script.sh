#!/bin/bash

docker build -f Dockerfile -t dataneuronofficial.azurecr.io/dataneuronofficial:latest .
az acr login --name dataneuronofficial
docker push dataneuronofficial.azurecr.io/dataneuronofficial:latest