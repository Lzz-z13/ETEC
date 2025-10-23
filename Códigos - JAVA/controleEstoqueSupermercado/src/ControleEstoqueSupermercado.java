import javax.swing.JOptionPane;

public class ControleEstoqueSupermercado {
    public static void main(String[] args) {
        // 1) MATRIZ 3x3: 3 filiais (linhas) x 3 categorias (colunas)
        int[][] estoque = new int[3][3];

        String[] nomesFiliais = {"Filial 1", "Filial 2", "Filial 3"};
        String[] nomesCategorias = {"Alimentos", "Limpeza", "Higiene"};

        JOptionPane.showMessageDialog(null, "Registro de estoque por Filial e Categoria");

        // 2) ENTRADA DE DADOS
        for (int f = 0; f < 3; f++) {
            for (int c = 0; c < 3; c++) {
                String entrada = JOptionPane.showInputDialog(
                    "Digite a quantidade de " + nomesCategorias[c] +
                    " para " + nomesFiliais[f] + " (inteiro):"
                );
                estoque[f][c] = Integer.parseInt(entrada);
            }
        }

        // 3) SAÍDA DE DADOS
        for (int f = 0; f < 3; f++) {
            String mensagem = nomesFiliais[f] + ":\n";
            int totalFilial = 0;

            for (int c = 0; c < 3; c++) {
                int qtd = estoque[f][c];
                mensagem += nomesCategorias[c] + ": " + qtd + "\n";
                totalFilial = totalFilial + qtd;
            }

            mensagem += "Total da filial: " + totalFilial + "\n";
            JOptionPane.showMessageDialog(null, mensagem);
        }
    }
}
