import { z } from 'zod';

export const messageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  timestamp: z.number(),
});

export const conversationSchema = z.object({
  id: z.string(),
  messages: z.array(messageSchema),
  createdAt: z.number(),
});

export type Message = z.infer<typeof messageSchema>;
export type Conversation = z.infer<typeof conversationSchema>;
