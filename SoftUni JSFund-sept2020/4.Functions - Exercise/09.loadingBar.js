function loadingBar(n) {
    let result = (n) => n == 100 ? '[%%%%%%%%%%]' : 'Still loading...';

    function percentageBar(n) {
        let line = ''
        switch (n) {
            case 10: return line = '10% [%.........]';
            case 20: return line = '20% [%%........]';
            case 30: return line = '30% [%%%.......]';
            case 40: return line = '40% [%%%%......]';
            case 50: return line = '50% [%%%%%.....]';
            case 60: return line = '60% [%%%%%%....]';
            case 70: return line = '70% [%%%%%%%...]';
            case 80: return line = '80% [%%%%%%%%..]';
            case 90: return line = '90% [%%%%%%%%%.]';
            case 100: return line = '100% Complete!';
        }

    }

    return percentageBar(n) + '\n' + result(n);
}

console.log(loadingBar(100));