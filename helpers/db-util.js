import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.3mnw94p.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, id) {
  const db = client.db();

  const documents = await db.collection(collection).find().toArray();
  return documents;
}
export async function deleteDocument(client, collection, id) {
  const db = client.db();

  const documents = await db.collection(collection).deleteOne(id);
  return documents;
}

export async function deleteAllDocument(client, collection) {
  const db = client.db();

  const documents = await db.collection(collection).deleteMany();
  return documents;
}

export async function getAllDocumentsAndFilter(
  client,
  collection,
  sort,
  filter
) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}
