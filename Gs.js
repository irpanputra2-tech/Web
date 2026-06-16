// ==========================================
// PORTAL EDUKASI - BACKEND GS
// ==========================================

function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no') 
    .setTitle('Portal Game Edukasi');
}

// Validasi Login Admin (Khusus Guru/Pengawas)
function loginAdminGS(username, password) {
  // SILAKAN UBAH USERNAME DAN PASSWORD DI BAWAH INI:
  var adminUser = "admin";
  var adminPass = "rahasia123";

  if (username === adminUser && password === adminPass) {
    return { success: true };
  } else {
    return { success: false, msg: "Username atau Password Admin salah!" };
  }
}