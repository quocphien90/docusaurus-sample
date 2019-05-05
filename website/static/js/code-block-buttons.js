window.addEventListener('load', function() {
    function button(label, ariaLabel, icon, className, data = '') {
      const btn = document.createElement('button');
      btn.classList.add('btnIcon', className);
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', ariaLabel);
      if(data != ''){
        btn.setAttribute('data-sandbox', data);
      }
      btn.innerHTML =
        '<div class="btnIcon__body">' +
        icon +
        '<strong class="btnIcon__label">' +
        label +
        '</strong>' +
        '</div>';
      return btn;
    }
  
    function addButtons(codeBlockSelector, btn) {
      document.querySelectorAll(codeBlockSelector).forEach(function(code) {
        code.parentNode.appendChild(btn.cloneNode(true));
      });
    }

    const editCodeIcon = 
      '<svg width="12" height="12"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"></path></svg>';
  
    const copyIcon =
      '<svg width="12" height="12" viewBox="340 364 14 15" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M342 375.974h4v.998h-4v-.998zm5-5.987h-5v.998h5v-.998zm2 2.994v-1.995l-3 2.993 3 2.994v-1.996h5v-1.995h-5zm-4.5-.997H342v.998h2.5v-.997zm-2.5 2.993h2.5v-.998H342v.998zm9 .998h1v1.996c-.016.28-.11.514-.297.702-.187.187-.422.28-.703.296h-10c-.547 0-1-.452-1-.998v-10.976c0-.546.453-.998 1-.998h3c0-1.107.89-1.996 2-1.996 1.11 0 2 .89 2 1.996h3c.547 0 1 .452 1 .998v4.99h-1v-2.995h-10v8.98h10v-1.996zm-9-7.983h8c0-.544-.453-.996-1-.996h-1c-.547 0-1-.453-1-.998 0-.546-.453-.998-1-.998-.547 0-1 .452-1 .998 0 .545-.453.998-1 .998h-1c-.547 0-1 .452-1 .997z" fill-rule="evenodd"/></svg>';
  
    addButtons(
      '.hljs',
      button('Copy', 'Copy code to clipboard', copyIcon, 'btnClipboard'),
    );
    const editCodeButton = button('Edit', 'Edit in Sandbox', editCodeIcon, 'btnEditSandbox');
    
    addButtons(
        '.hljs',
        editCodeButton,
    );
    
    const clipboard = new ClipboardJS('.btnClipboard', {
      target: function(trigger) {
        return trigger.parentNode.querySelector('code');
      },
    });
  
    const codeSandbox = new ClipboardJS('.btnEditSandbox', {
        target: function(trigger) {
            const codeClassList = trigger.parentNode.querySelector('code').classList;
            if(codeClassList.length > 3){
                const sandboxValue = codeClassList[codeClassList.length-1];
                const codeSanboxUrl = 'https://codesandbox.io/s/'+ sandboxValue;
                window.open(codeSanboxUrl, '_blank');
            }
        },
      });

    clipboard.on('success', function(event) {
      event.clearSelection();
      const textEl = event.trigger.querySelector('.btnIcon__label');
      textEl.textContent = 'Copied';
      setTimeout(function() {
        textEl.textContent = 'Copy';
      }, 2000);
    });
  });