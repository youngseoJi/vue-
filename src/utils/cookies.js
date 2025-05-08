// 새로고침 시 유저정보 유지

function saveAuthToCookie(value) {
  document.cookie = `til_auth=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `til_user=${value}`;
}

// 토큰 불러오기
function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

// 유저 이름 불러오기
function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};
