export interface ICourse {
  courseId: number;
  courseTitle: string;
  courseLength: number;
  courseCompleteness: number;
  courseLevel: "Начинающим" | "Продвинутым";
}
