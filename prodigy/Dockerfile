FROM python:3.7-slim

RUN mkdir -p /tmp/install 
COPY ./install /tmp/install
RUN cd /tmp/install && pip install ./prodigy*.whl # ex: install/prodigy-1.10.8-cp36.cp37.cp38-cp36m.cp37m.cp38-linux_x86_64.whl

WORKDIR /app

COPY ./data /app/data
COPY ./prodigy_recipe /app/prodigy_recipe 
COPY ./start_server.sh /app
COPY ./prodigy.json /app

EXPOSE 8080

CMD [ "/app/start_server.sh" ]
