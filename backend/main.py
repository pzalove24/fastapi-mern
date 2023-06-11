from typing import List

from fastapi import FastAPI

from pydantic import BaseModel

app = FastAPI()

class Person(BaseModel):
    id: int
    name: str
    age: int

DB: List[Person] = [
    Person(id=1, name='Pe', age=22),
    Person(id=2, name='Jane', age=23),
    Person(id=3, name='Brave', age=23),
]


@app.get("/api")
def read_root():
    return DB