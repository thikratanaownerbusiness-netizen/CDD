# Security Specification - Curriculum Development Department

## Data Invariants
1.  **Curriculums**: Can be read by everyone (if status is 'Published') or only by Admins (if status is 'Draft' or 'Archived'). Writes are restricted to Admins.
2.  **News**: Publicly readable. Writes restricted to Admins.
3.  **Events**: Publicly readable. Writes restricted to Admins.
4.  **Resources**: Publicly readable. Writes restricted to Admins.
5.  **Inquiries**: Create-only for public (authenticated or guest, depending on policy - let's require authentication for better security/spam protection, or allow public if user is guest). Actually, for high-converting forms, public create is common. Reads/Updates restricted to Admins.
6.  **Admins**: Defined in a special `/admins` collection.

## Dirty Dozen Payloads (Targeting Rejection)
1.  **Unauthorized News Creation**: A non-admin user trying to create a news post.
2.  **Unauthorized Curriculum Update**: A non-admin user trying to modify a published curriculum.
3.  **Anonymous Inquiry Manipulation**: A user trying to read inquiries they didn't send (or any inquiry if they aren't admin).
4.  **Admin Self-Promotion**: A user trying to add themselves to the `/admins` collection.
5.  **Status Shortcut**: A non-admin user trying to publish a curriculum by setting status to 'Published' via an update.
6.  **ID Poisoning**: Sending a 2KB string as a curriculum document ID.
7.  **Resource Poisoning**: Sending a 1MB string in the 'content' field of a news post.
8.  **Identity Spoofing**: Setting `authorId` in a resource to someone else's UID.
9.  **Relational Orphan**: Creating a resource referencing a non-existent category.
10. **Terminal State Break**: Attempting to move an inquiry from 'Handled' back to 'New' after it's been finalized (if terminal locking applied).
11. **Shadow Update**: Adding a field `isAdmin: true` to a user profile (system-generated field attack).
12. **PII Leak**: A user attempting to `get` the inquiry details of another user.

## Implementation Path
- Use `isValidCurriculum`, `isValidNews`, etc.
- Implement `isAdmin()` helper check via `/admins/$(request.auth.uid)`.
- Enforce `Published` status visibility for public reads.
