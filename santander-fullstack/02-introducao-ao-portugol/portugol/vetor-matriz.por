programa
{
	
	funcao inicio()
	{
		cadeia frutas[4]
		inteiro contador = 0

		frutas[0] = "Maçã"
		frutas[1] = "Pera"
		frutas[2] = "Uva"
		frutas[3] = "Jaca"

		faca {
			escreva(frutas[contador] + "\n")
			contador++
		} enquanto (contador <= 3)

		
		contador = 0
		cadeia cesta[][] = {{"Pera", "100"}, {"Jaca", "200"}, {"Maçã", "900"}, {"Uva", "89"}}

		faca {
			escreva("\nProduto: " + cesta[contador][0] + ", Quantidade: " + cesta[contador][1])
			contador++
		} enquanto (contador <= 3)

		cadeia nomes[3], cidades[3], telefones[3]
		nomes[0] = "João" nomes[1] = "Maria" nomes[2] = "Ana"
		cidades[0] = "São Paulo" cidades[1] = "Ribeirão Preto" cidades[2] = "Manaus"
		telefones[0] = "(11)9999-5241" telefones[1] = "(16)9999-8596" telefones[0] = "(92)9999-8574"
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 763; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */