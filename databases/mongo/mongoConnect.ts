import mongoose, { connect } from "mongoose"

mongoose.set("debug", function (collection, method, query, document) {
  // console.log("MONGO DB QUERY", collection, method, query, document);
})

declare global {
  var client: {
    promise: ReturnType<typeof connect> | null
    connection: typeof mongoose | null
  }
}

let cached = global.client

if (!cached) {
  cached = global.client = { connection: null, promise: null }
}

export async function mongoConnect() {
  if (cached.connection) {
    return cached.connection
  }

  if (!cached.promise) {
    cached.promise = connect(process.env.MONGODB_URI!, {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 4,
      connectTimeoutMS: 0,
      socketTimeoutMS: 0,
      serverSelectionTimeoutMS: 30000,
      maxIdleTimeMS: 30000,
    }).then((client) => client)
  }

  try {
    cached.connection = await cached.promise
  } catch (error: any) {
    console.log("ERROR: MONGO DB", error.message)
    cached.promise = null
    throw error
  }

  return cached.connection
}
