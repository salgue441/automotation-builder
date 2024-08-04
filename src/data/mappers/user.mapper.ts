import { User as PrismaUser } from "@prisma/client"
import { User } from "@/core/domain/models"

/**
 * User mapper
 */
export class UserMapper {
  /**
   * Maps a Prisma user to a domain user
   *
   * @param prismaUser - The Prisma user
   * @returns User - The domain user
   */
  static toDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.clerkId,
      prismaUser.name,
      prismaUser.email,
      prismaUser.profileImage,
      prismaUser.tier || "Free",
      prismaUser.credits || "10",
      prismaUser.createdAt,
      prismaUser.updatedAt,
      prismaUser.localGoogleId,
      prismaUser.googleResourceId
    )
  }

  /**
   * Maps a domain user to a Prisma user
   *
   * @param user - The domain user
   * @returns PrismaUser - The Prisma user
   */
  static toPersistence(user: User): PrismaUser {
    return {
      id: user.id,
      clerkId: user.clerkId,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      tier: user.tier,
      credits: user.credits,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      localGoogleId: user.localGoogleId,
      googleResourceId: user.googleResourceId,
    }
  }
}
