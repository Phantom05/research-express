import _ from "lodash";
// export { api } from "~/lib/api";

export const router = {
  address: {
    index: "/",
    users: "/users",
  },
};

// export function errorState(rows) {
//   // 2 => 중복
//   console.log(rows);
//   const { code, sqlMessage, errno } = rows.error;
//   if (code === "ER_DUP_ENTRY") {
//     return {
//       result: 2,
//       errMessage: sqlMessage,
//       errno: errno,
//     };
//   }
// }

/**
 * NOTE: object를 insert형식의 keys,values 객체로 반환
 * @param {*} obj
 * @param {*} types
 */
export function convertObjectToCommaString(obj: any) {
  return {
    keys: Object.keys(obj).join(", "),
    values: Object.values(obj)
      .map((i) => `"${i}"`)
      .join(", "),
  };
}

// export function convertObjectToUpdateQuery(obj) {
//   const updateString = _.reduce(
//     Object.entries(obj),
//     (acc, [key, value]) => {
//       if (value.length !== 0) acc += `${key}="${value}", `;
//       return acc;
//     },
//     ""
//   );
//   return removeLastComma(updateString);
// }

export function removeLastComma(strng: string) {
  var n = strng.lastIndexOf(",");
  var a = strng.substring(0, n);
  return a;
}
