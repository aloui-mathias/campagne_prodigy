FROM python:3.7-slim

RUN apt-get update && apt-get install -y cron vim && apt-get clean

RUN mkdir -p /tmp/install 
COPY ./install /tmp/install
RUN cd /tmp/install && pip install ./prodigy*.whl # ex: install/prodigy-1.10.8-cp36.cp37.cp38-cp36m.cp37m.cp38-linux_x86_64.whl

WORKDIR /app

ADD ./crontab /etc/cron.d/export
RUN chmod 0644 /etc/cron.d/export
RUN crontab /etc/cron.d/export
RUN touch /var/log/cron.log

COPY ./prodigy_recipe /app/prodigy_recipe 
COPY ./start_server.sh /app

EXPOSE 8080

CMD [ "/app/start_server.sh" ]
