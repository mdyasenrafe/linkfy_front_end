enum TextVariants {
  // H1 = "H1",
  // H2 = "H2",
  // H3 = "H3",
  // H4 = "H4",
  // H5 = "H5",
  // H6 = "H6",
  // P1 = "P1",
  // P2 = "P2",
  // P3 = "P3",
  // P4 = "P4",
  // P5 = "P5",
  // P6 = "P6",
  Body = "Body",
}

export const TextStyles: Record<TextVariants, string> = {
  [TextVariants.Body]:
    "text-base font-normal text-gray-900 dark:text-white font-inter",
};

export type TextVariant = keyof typeof TextVariants;
