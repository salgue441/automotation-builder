/**
 * User model
 *
 * @property id: number - The user ID
 * @property clerkId: string - The clerk ID
 * @property name: string | null - The user name
 * @property email: string - The user email
 * @property profileImage: string | null - The user profile image
 * @property tier: string - The user tier
 * @property credits: string - The user credits
 * @property createdAt: Date - The user creation date
 * @property updatedAt: Date - The user update date
 * @property localGoogleId: string | null - The local Google ID
 * @property googleResourceId: string | null - The Google resource ID
 */
export class User {
  constructor(
    public id: number,
    public clerkId: string,
    public name: string | null,
    public email: string,
    public profileImage: string | null,
    public tier: string,
    public credits: string,
    public createdAt: Date,
    public updatedAt: Date,
    public localGoogleId: string | null,
    public googleResourceId: string | null
  ) {}
}
