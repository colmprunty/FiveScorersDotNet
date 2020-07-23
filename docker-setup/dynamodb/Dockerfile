FROM amazon/dynamodb-local:latest

ENV PATH="$PATH:/root/.local/bin"

USER root

RUN yum install unzip -y
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

COPY create-table.sh .

ENTRYPOINT ["/bin/bash", "create-table.sh"]