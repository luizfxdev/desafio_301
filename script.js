// Elementos do DOM
const startButton = document.getElementById('start-button');
const backButton = document.getElementById('back-button');
const originalColorsInput = document.getElementById('original-colors');
const lostColorsInput = document.getElementById('lost-colors');
const resultSection = document.getElementById('result-section');
const calculationDetails = document.getElementById('calculation-details');
const finalResult = document.getElementById('final-result');

// Função principal para resolver o desafio das Chamas da Verdade
function solveFlameChallenge(originalColors, lostColors) {
  // Convertendo strings em arrays e removendo espaços em branco
  const originalArray = originalColors
    .split(',')
    .map(color => color.trim().toLowerCase())
    .filter(color => color !== '');
  const lostArray = lostColors
    .split(',')
    .map(color => color.trim().toLowerCase())
    .filter(color => color !== '');

  // Validação básica
  if (originalArray.length === 0) {
    throw new Error('Lista de cores originais não pode estar vazia');
  }

  if (lostArray.length === 0) {
    throw new Error('Lista de cores perdidas não pode estar vazia');
  }

  // Criando Set para otimizar a busca de cores perdidas
  const lostColorsSet = new Set(lostArray);

  // Filtrando cores que não foram consumidas pelas trevas
  const remainingColors = originalArray.filter(color => !lostColorsSet.has(color));

  return {
    original: originalArray,
    lost: lostArray,
    remaining: remainingColors,
    process: generateCalculationSteps(originalArray, lostArray, remainingColors, lostColorsSet)
  };
}

// Função para gerar os passos detalhados do cálculo
function generateCalculationSteps(original, lost, remaining, lostSet) {
  let steps = '';

  steps += '🔥 ANÁLISE DAS CHAMAS DA VERDADE 🔥\n\n';
  steps += `📋 Cores Originais encontradas por Rengoku:\n`;
  steps += `   [${original.map(c => `"${c}"`).join(', ')}]\n`;
  steps += `   Total: ${original.length} cor(es)\n\n`;

  steps += `🌑 Cores consumidas pelas trevas:\n`;
  steps += `   [${lost.map(c => `"${c}"`).join(', ')}]\n`;
  steps += `   Total: ${lost.length} cor(es)\n\n`;

  steps += `⚔️ Processo de Validação (algoritmo de filtro):\n`;
  steps += `   Para cada cor original, verificar se NÃO está nas trevas:\n\n`;

  original.forEach((color, index) => {
    const isLost = lostSet.has(color);
    const status = isLost ? '❌ CONSUMIDA' : '✅ RESISTIU';
    const explanation = isLost ? `está presente na lista de cores perdidas` : `NÃO está na lista de cores perdidas`;

    steps += `   ${index + 1}. "${color}" → ${status}\n`;
    steps += `      Verificação: "${color}" ${explanation}\n\n`;
  });

  steps += `🏆 Resultado Final:\n`;
  steps += `   Cores que resistiram às trevas: ${remaining.length} cor(es)\n`;
  steps += `   Algoritmo: filter(cor => !coresPerdidas.includes(cor))\n`;

  return steps;
}

// Função para mostrar o resultado
function displayResult(result) {
  calculationDetails.textContent = result.process;

  if (result.remaining.length > 0) {
    finalResult.innerHTML = `
            <strong>🎯 MISSÃO CUMPRIDA!</strong><br>
            <em>Rengoku restaurou a luz do mundo!</em><br><br>
            <strong>Cores Salvas:</strong><br>
            [${result.remaining.map(c => `"${c}"`).join(', ')}]<br><br>
            <small>Total de cores preservadas: ${result.remaining.length}</small>
        `;
  } else {
    finalResult.innerHTML = `
            <strong>💀 DERROTA TOTAL!</strong><br>
            <em>As trevas consumiram todas as cores...</em><br><br>
            <strong>Resultado:</strong> []<br><br>
            <small>Nenhuma cor resistiu ao poder do Oni</small>
        `;
  }

  // Controlando visibilidade dos botões
  resultSection.style.display = 'block';
  startButton.style.display = 'none';
  backButton.style.display = 'inline-block';

  // Rolando para mostrar o resultado com animação suave
  setTimeout(() => {
    resultSection.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, 100);
}

// Função para validar entrada
function validateInput() {
  const originalValue = originalColorsInput.value.trim();
  const lostValue = lostColorsInput.value.trim();

  if (!originalValue) {
    showAlert('⚠️ Por favor, insira as cores originais!\n\nExemplo: vermelho, azul, verde, amarelo');
    originalColorsInput.focus();
    return false;
  }

  if (!lostValue) {
    showAlert('⚠️ Por favor, insira as cores perdidas!\n\nExemplo: verde, amarelo');
    lostColorsInput.focus();
    return false;
  }

  // Validação adicional: verificar se há pelo menos uma vírgula ou uma cor
  const originalColors = originalValue
    .split(',')
    .map(c => c.trim())
    .filter(c => c !== '');
  const lostColors = lostValue
    .split(',')
    .map(c => c.trim())
    .filter(c => c !== '');

  if (originalColors.length === 0) {
    showAlert('⚠️ As cores originais devem ser separadas por vírgula!\n\nExemplo: vermelho, azul, verde');
    originalColorsInput.focus();
    return false;
  }

  if (lostColors.length === 0) {
    showAlert('⚠️ As cores perdidas devem ser separadas por vírgula!\n\nExemplo: verde, amarelo');
    lostColorsInput.focus();
    return false;
  }

  return true;
}

// Função para mostrar alertas personalizados
function showAlert(message) {
  alert(message);
}

// Função para resetar o formulário
function resetForm() {
  originalColorsInput.value = '';
  lostColorsInput.value = '';
  resultSection.style.display = 'none';
  startButton.style.display = 'inline-block';
  backButton.style.display = 'none';
  originalColorsInput.focus();
}

// Função para processar o desafio
function processChallenge() {
  if (validateInput()) {
    const originalColors = originalColorsInput.value.trim();
    const lostColors = lostColorsInput.value.trim();

    try {
      // Adicionar efeito visual durante o processamento
      startButton.disabled = true;
      startButton.textContent = '🔥 PROCESSANDO...';

      // Simular um pequeno delay para efeito dramático
      setTimeout(() => {
        try {
          const result = solveFlameChallenge(originalColors, lostColors);
          displayResult(result);
        } catch (error) {
          showAlert(`❌ Erro ao processar os dados:\n\n${error.message}\n\nVerifique o formato de entrada.`);
          console.error('Processing Error:', error);
        } finally {
          startButton.disabled = false;
          startButton.innerHTML =
            '🔥 INICIAR<span class="bubbles"><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span></span>';
        }
      }, 500);
    } catch (error) {
      showAlert('❌ Erro inesperado. Tente novamente.');
      console.error('Unexpected Error:', error);
      startButton.disabled = false;
      startButton.innerHTML =
        '🔥 INICIAR<span class="bubbles"><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span></span>';
    }
  }
}

// Event Listeners
startButton.addEventListener('click', processChallenge);
backButton.addEventListener('click', resetForm);

// Permitir executar com Enter nos inputs
originalColorsInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    lostColorsInput.focus();
  }
});

lostColorsInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    processChallenge();
  }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Focar no primeiro input
  originalColorsInput.focus();

  // Garantir estado inicial correto dos botões
  startButton.style.display = 'inline-block';
  backButton.style.display = 'none';
  resultSection.style.display = 'none';

  // Debug para desenvolvedores
  console.log('🔥 Prova das Chamas da Verdade carregada com sucesso!');

  // Função global para testes
  window.testChallenge = (original, lost) => {
    if (typeof original === 'string' && typeof lost === 'string') {
      return solveFlameChallenge(original, lost);
    } else {
      console.error('Use strings separadas por vírgula. Exemplo: testChallenge("a,b,c", "b,c")');
    }
  };
});
