/**
 * Model for LocalGoogleCredential
 *
 * @property id: string - The credential ID
 * @property accessToken: string - The access token
 * @property folderId: string | null - The folder ID
 * @property pageToken: string | null - The page token
 * @property channelId: string - The channel ID
 * @property subscribed: boolean - The subscription status
 * @property createdAt: Date - The creation date
 * @property updatedAt: Date - The update date
 * @property userId: number - The user ID
 */
export class LocalGoogleCredential {
  constructor(
    public id: string,
    public accessToken: string,
    public folderId: string | null,
    public pageToken: string | null,
    public channelId: string,
    public subscribed: boolean,
    public createdAt: Date,
    public updatedAt: Date,
    public userId: number
  ) {}
}
