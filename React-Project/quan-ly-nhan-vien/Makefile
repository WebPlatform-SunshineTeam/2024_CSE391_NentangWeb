# Makefile ví dụ
IMAGE_NAME=sunshinee/quan-ly-nhan-vien-react-app
TAG=latest

build:
	docker build -t $(IMAGE_NAME):$(TAG) .

push:
	docker push $(IMAGE_NAME):$(TAG)

deploy: build push
