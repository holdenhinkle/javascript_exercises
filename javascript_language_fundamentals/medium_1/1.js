(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // (undefined || false) => false
((false && undefined) && (false || undefined)); // (false && indefined) => false
((false || undefined) && (false && undefined)); // (undefined && false) => undefined
('a' || (false && undefined) || ''); // 'a'
((false && undefined) || 'a' || ''); // (false || 'a' || '') => 'a'
('a' && (false || undefined) && ''); // ('a' && undefined && '') => undefined
((false || undefined) && 'a' && ''); // undefined