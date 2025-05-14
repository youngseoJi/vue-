// 필터 관련 함수모음 파일

export function formatData(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  let hours = date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  const minutes = date.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
