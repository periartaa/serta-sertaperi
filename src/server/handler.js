const predictClassification = require("../services/inferenceService");
const crypto = require("crypto");
const storeData = require("../services/storeData"); // Pastikan Anda mengimpor fungsi ini

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  // Lakukan prediksi
  const { confidenceScore, label, explanation, suggestion } =
    await predictClassification(model, image);

  // Tambahkan log di sini untuk memeriksa nilai variabel
  console.log("Confidence Score:", confidenceScore);
  console.log("Label:", label);
  console.log("Explanation:", explanation);
  console.log("Suggestion:", suggestion);

  // Buat ID unik dan timestamp
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  // Siapkan data untuk disimpan
  const data = {
    id: id,
    result: label,
    explanation: explanation,
    suggestion: suggestion,
    confidenceScore: confidenceScore,
    createdAt: createdAt,
  };

  // Panggil fungsi storeData untuk menyimpan data prediksi
  await storeData(id, data);

  // Siapkan respons
  const response = h.response({
    status: confidenceScore > 99 ? "success" : "fail",
    message:
      confidenceScore > 99
        ? "Model is predicted successfully."
        : "Model is predicted successfully but under threshold. Please use the correct picture",
    data,
  });

  response.code(201); // Atur status kode menjadi 201
  return response; // Kembalikan respons
}

module.exports = postPredictHandler;
