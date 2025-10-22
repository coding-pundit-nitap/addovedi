import { z } from "zod";

// Schema for individual participant
export const participantSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  class: z.string().min(1, "Class is required").max(50),
  contact: z.string().min(1, "Must Provide the contact Information."),
});

// Schema for science exhibition registration
export const scienceExhibitionSchema = z.object({
  schoolName: z
    .string()
    .min(3, "School name must be at least 3 characters")
    .max(200),
  teacherCoordinator: z
    .string()
    .min(2, "Teacher name must be at least 2 characters")
    .max(100),
  teacherPhone: z
    .string()
    .regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits"),
  category: z
    .string()
    .min(2, "Category must be at least 2 characters")
    .max(100),
  topic: z.string().min(5, "Please select a project topic").max(500),
  participants: z
    .array(participantSchema)
    .min(1, "At least one participant is required")
    .max(10, "Maximum 10 participants allowed"),
});

export type ScienceExhibitionFormValues = z.infer<
  typeof scienceExhibitionSchema
>;
export type ParticipantFormValues = z.infer<typeof participantSchema>;
