import { z } from 'zod';
export const TopicSchema = z.object({
    name: z.string(),
    color: z.string(),
});
