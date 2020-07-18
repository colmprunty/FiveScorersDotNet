FROM amazon/dynamodb-local:latest

ENV PATH="$PATH:/root/.local/bin"
COPY create-table.sh .

ENTRYPOINT create-table.sh