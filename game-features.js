// game-features.js

export function updateRageMeter(currentRage, hitCount) {
    // منطق زيادة الغضب
    let newRage = currentRage + (hitCount * 5);
    return newRage > 100 ? 100 : newRage;
}

export function triggerRageMode() {
    // تأثيرات الغضب
    console.log("Rage Mode Activated!");
    // هنا نضع كود تغيير الألوان أو سرعة الحركة
}
