import { type ZodSchema, z } from "zod/v3";

export function createEnv(schema: ZodSchema) {
  try {
    return schema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join("\n");

      throw new Error(
        `❌ Invalid environment variables:\n${missingVars}\n\nPlease check your .env.local file.`,
      );
    }
    throw error;
  }
}
