function passTheBill(totalMembers, conservativePartyMembers, reformistPartyMembers) {
  if (totalMembers / conservativePartyMembers < 2) return 0;
  
  const independentMembers = (totalMembers - conservativePartyMembers - reformistPartyMembers)
  const majority = Math.floor(totalMembers / 2) + 1;
  const hasEnough = independentMembers + conservativePartyMembers >= majority;
  
  if (hasEnough) {
    return majority - conservativePartyMembers;
  }
  
  return -1
  
}