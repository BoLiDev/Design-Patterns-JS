function a() {
  //do something
}

function b() {
  //do something
}

function c() {
  //do something
}


function alpha(foo) {
  //do something alpha before
  foo();
  //do something alpha after
}

function beta(foo) {
  //do something beta before
  foo();
  //do something beta after
}

export const ALPHA_MAPPING = {
  A_ALPHA: () => alpha(a),
  B_ALPHA: () => alpha(b),
  C_ALPHA: () => alpha(c),
}

//const a_alpha_beta = (a) => beta(() => alpha(a))