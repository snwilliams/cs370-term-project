#!/bin/sh

docker rm cs370-proiject
docker build -t cs370-project .
docker run -p 8000:8000 -it --name=cs370-project cs370-project
