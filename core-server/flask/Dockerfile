FROM python:3.8.10
ADD . /python-flask
WORKDIR /python-flask
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 3001
COPY . .
CMD python app.py

