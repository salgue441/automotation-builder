import { LocalGoogleCredential as PrismaLocalGoogleCredential } from "@prisma/client"
import { LocalGoogleCredential } from "@/core/domain/models"

export class LocalGoogleCredentialMapper {
  /**
   * Converts a PrismaLocalGoogleCredential to a LocalGoogleCredential
   *
   * @param prismaCredential - The PrismaLocalGoogleCredential
   * @returns LocalGoogleCredential - The LocalGoogleCredential
   */
  static toDomain(
    prismaCredential: PrismaLocalGoogleCredential
  ): LocalGoogleCredential {
    return new LocalGoogleCredential(
      prismaCredential.id,
      prismaCredential.accessToken,
      prismaCredential.folderId,
      prismaCredential.pageToken,
      prismaCredential.channelId,
      prismaCredential.subscribed,
      prismaCredential.createdAt,
      prismaCredential.updatedAt,
      prismaCredential.userId
    )
  }

  /**
   * Converts a LocalGoogleCredential to a PrismaLocalGoogleCredential
   *
   * @param credential - The LocalGoogleCredential
   * @returns PrismaLocalGoogleCredential - The PrismaLocalGoogle
   */
  static toPersistence(
    credential: LocalGoogleCredential
  ): PrismaLocalGoogleCredential {
    return {
      id: credential.id,
      accessToken: credential.accessToken,
      folderId: credential.folderId,
      pageToken: credential.pageToken,
      channelId: credential.channelId,
      subscribed: credential.subscribed,
      createdAt: credential.createdAt,
      updatedAt: credential.updatedAt,
      userId: credential.userId,
    }
  }
}
