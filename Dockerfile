# pull official base image
FROM python:3.11.9-slim-bullseye

RUN mkdir /AppCI
WORKDIR /AppCI

RUN apt-get update \
    && apt-get install -y postgresql-client --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt
RUN pip install gunicorn

COPY ./.env.prod /AppCI
COPY ./AppCI /AppCI
