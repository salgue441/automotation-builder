import { PrismaClient } from "@prisma/client"

/**
 * The database class
 */
class Database {
  private static instance: Database
  private _prisma: PrismaClient

  private constructor() {
    this._prisma = new PrismaClient({
      log:
        process.env.NODE_ENV === "development"
          ? ["query", "error", "warn"]
          : ["error"],
    })
  }

  /**
   * Gets the instance of the database
   *
   * @returns Database - The database instance
   */
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }

  /**
   * Gets the Prisma client
   *
   * @returns PrismaClient - The Prisma client
   */
  public get prisma(): PrismaClient {
    return this._prisma
  }

  /**
   * Connects to the database
   *
   * @returns Promise<void> - The promise
   * @throws Error - The error if the connection fails
   */
  public async connect(): Promise<void> {
    try {
      await this._prisma.$connect()
      console.log("Successfully connected to the database")
    } catch (error) {
      console.error("Failed to connect to the database:", error)
      process.exit(1)
    }
  }

  /**
   * Disconnects from the database
   *
   * @returns Promise<void> - The promise
   */
  public async disconnect(): Promise<void> {
    await this._prisma.$disconnect()
    console.log("Disconnected from the database")
  }
}

const db = Database.getInstance()

db.connect().catch(console.error)

process.on("SIGINT", async () => {
  await db.disconnect()
  process.exit(0)
})

export default db
