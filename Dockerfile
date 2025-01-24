FROM ubuntu:latest
LABEL authors="Danny Orton"

ENTRYPOINT ["top", "-b"]