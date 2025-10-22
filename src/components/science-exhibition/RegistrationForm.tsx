"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Plus, School, Sparkles, Trash2, Users } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { registerScienceExhibition } from "@/app/actions/scienceExhibition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type ScienceExhibitionFormValues,
  scienceExhibitionSchema,
} from "@/lib/schemas/scienceExhibitionSchema";

const categories = [
  {
    id: "category-a",
    name: "Category A – Classes 8 to 10 (Beginner Level)",
    theme: "Smart Living through Simple Automation",
    topics: [
      "Smart Home using Radio Control – simple automation of lights, fans, or doors using remote or Bluetooth",
      "Automatic Street Lighting System – light-dependent sensors for community energy saving",
      "Mini Waste Segregator – basic model separating dry and wet waste using simple sensors or mechanisms",
    ],
  },
  {
    id: "category-b",
    name: "Category B – Classes 11 to 12 (Intermediate Level)",
    theme: "Technology for a Sustainable Society",
    topics: [
      "IoT-based Smart Waste Management System – monitoring and collection system for municipal waste bins",
      "Water Supply Monitoring and Leakage Detection – sensors for efficient municipal water management",
      "Smart Irrigation for Sustainable Farming – soil moisture-based automated irrigation setup",
    ],
  },
  {
    id: "category-c",
    name: "Category C – College Level (Advanced Level)",
    theme: "Smart Cities and Future Technologies",
    topics: [
      "IoT-based Urban Traffic and Parking Management System – real-time data for vehicle flow optimization",
      "Integrated Waste-to-Energy Model – combining IoT monitoring with energy recovery solutions",
      "AI-assisted Disaster Response Network – IoT sensors for early detection of floods, landslides, or earthquakes",
    ],
  },
];

export default function ScienceExhibitionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const form = useForm<ScienceExhibitionFormValues>({
    resolver: zodResolver(scienceExhibitionSchema),
    defaultValues: {
      schoolName: "",
      teacherCoordinator: "",
      teacherPhone: "",
      category: "",
      topic: "",
      participants: [{ name: "", class: "", contact: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "participants",
  });

  async function onSubmit(values: ScienceExhibitionFormValues) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await registerScienceExhibition(values);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Registration successful! We'll contact you soon.",
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Registration failed. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-accent-teal" />
          Science Exhibition Registration
        </h1>
        <p className="text-lg">
          Register your innovative project and showcase your scientific talents!
        </p>
      </motion.div>

      <AnimatePresence>
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-6 p-4 rounded-lg border ${
              submitStatus.type === "success"
                ? "bg-green-900/20 border-green-500 text-green-400"
                : "bg-red-900/20 border-red-500 text-red-400"
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}
      </AnimatePresence>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex bg-neutral-900 text-white flex-col gap-6"
        >
          {/* School Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-neutral-900 text-white"
          >
            <Card className="bg-neutral-900 text-white p-6">
              <h2 className="text-xl font-semibold bg-neutral-900 text-white mb-4 flex items-center gap-2">
                <School className="w-5 h-5 text-accent-teal" />
                School Information
              </h2>

              <div className="bg-neutral-900 text-white space-y-4">
                <FormField
                  control={form.control}
                  name="schoolName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-heading">
                        School Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your school name"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-heading">
                        Competition Category
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedCategory(value);
                          form.setValue("topic", "");
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                      {selectedCategory && (
                        <p className="text-sm text-accent-teal mt-2">
                          Theme:{" "}
                          {
                            categories.find((c) => c.id === selectedCategory)
                              ?.theme
                          }
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                {selectedCategory && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-heading">
                            Project Topic
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose your project topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories
                                .find((c) => c.id === selectedCategory)
                                ?.topics.map((topic, index) => (
                                  <SelectItem key={index} value={topic}>
                                    {topic}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="bg-neutral-900 text-white p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent-teal" />
                Teacher Coordinator
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="teacherCoordinator"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-heading">
                        Teacher Name
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter teacher's name" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="teacherPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-heading">
                        Contact Number
                      </FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" placeholder="9876543210" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
            </Card>
          </motion.div>

          {/* Participants Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="bg-neutral-900 text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-teal" />
                  Participants
                </h2>
                <Button
                  type="button"
                  onClick={() => append({ name: "", class: "", contact: "" })}
                  disabled={fields.length >= 10}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {!isMobile && "Add Participant"}
                </Button>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {fields.map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-neutral-900 text-white p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-medium text-accent-teal">
                            Participant {index + 1}
                          </h3>
                          {fields.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => remove(index)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name={`participants.${index}.name`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-heading">
                                  Student Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Enter student name"
                                    className=" border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-700 transition-all duration-300"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`participants.${index}.class`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-heading">
                                  Class
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="e.g., 10th A"
                                    className=" border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-700 transition-all duration-300"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`participants.${index}.contact`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-heading">
                                  Contact
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="e.g., 9123456789 or your-email@example.com"
                                    className=" border-neutral-800 text-white placeholder:text-neutral-500 focus:border-neutral-700 transition-all duration-300"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {fields.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  Add at least one participant
                </p>
              )}
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-6 text-lg font-semibold border-0 shadow-lg shadow-accent-teal/20 transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Register for Exhibition
                </span>
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </div>
  );
}
