function podeSubir(alturaPessoa,vemComCompania, temProblemaCardiaco ) {
  return !temProblemaCardiaco && (alturaPessoa >= 1.5) || (alturaPessoa >= 1.2 && vemComCompania);
}

// funcao usada para saber se uma pessoa pode ir na montanha russa
// pode: 1.5 de altura ou 1.2 com acompanhante e sem problema cardíaco