import { TCheckStatus } from "../types/types";

export const formatStatus = (
  status: string,
): TCheckStatus => {
  switch (status) {
    case "Finished":
      return {
        classname: "score__status--finished",
        text: "Finished",
      };
    case "Ongoing":
      return {
        classname: "score__status--live",
        text: "Live",
      };
    case "Scheduled":
      return {
        classname: "score__status--preparing",
        text: "Match preparing",
      };
    default:
      return {
        classname: "",
        text: "",
      };
  }
};
// export const checkStatusForFilterOptions = (
//   status: string,
// ): TCheckStatus => {
//   console.log(status);
//   switch (status) {
//     case "Live":
//       return {
//         text: "Ongoing",
//       };
//     case "Finished":
//       return {
//         text: "Finished",
//       };
//     case "Match preparing":
//       return {
//         text: "Scheduled",
//       };
//     default:
//       return {
//         text: "Все статусы",
//       };
//   }
// };
