
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("romance");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("게시물이 업로드되었습니다. (데모)");
    // TODO: 파일 업로드 및 게시글 등록 처리
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📤 번역 만화 업로드</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">제목</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">카테고리</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="romance">로맨스</option>
            <option value="fantasy">로맨스판타지</option>
            <option value="bl">BL</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">만화 파일 업로드</label>
          <input
            type="file"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="w-full"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          업로드
        </button>
      </form>
    </div>
  );
}
