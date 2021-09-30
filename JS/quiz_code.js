'use script'

	const btn = document.querySelector('.test_btn');
	btn.addEventListener('click', (e) => {
		let result = {};
		let step = 0;
		
		function showQuestion(questionNumber){
			document.querySelector('.question').innerHTML = quiz[step]['q'];
			let answer = '';
			for (let key in quiz[step]['a']){
				answer += `<li data-v = '${key}' class = 'answer-variant'>${quiz[step]['a'][key]}</li>`
				
			}
			document.querySelector('.answer').innerHTML = answer;
		}
		
		document.onclick = function (event){
			event.stopPropagation();
			if (event.target.classList.contains('answer-variant') && step < quiz.length){
			
				if (result[event.target.dataset.v] != undefined){
					result[event.target.dataset.v]++;
				}else {
					result[event.target.dataset.v] = 0;
				}
				step++;
				if(step == quiz.length){
					document.querySelector('.question').remove();
					document.querySelector('.answer').remove();
					showResult();
				}else  {
					showQuestion(step);
				}
			}
			console.log(result);
			
		}
		
		function showResult(){
			let key = Object.keys(result).reduce(function(a,b){
				return result[a] > result[b] ? a : b;
			});
			console.log(key);
			
			let div1 = document.createElement('div1');
			div1.classList.add('result');
			div1.innerHTML = answers[key]['test_result_title'];
			
			document.querySelector('.test_body').appendChild(div1);
			
			let div2 = document.createElement('div2');
			div2.classList.add('result');
			div2.innerHTML = answers[key]['test_result_content'];
		
			
			document.querySelector('.test_body').appendChild(div2);
			
			let div3 = document.createElement('div3');
			div3.classList.add('result');
			div3.innerHTML = answers[key]['test_result_image'];
		
			
			document.querySelector('.test_body').appendChild(div3);
		}
		
		showQuestion(step);
		
		
	});
