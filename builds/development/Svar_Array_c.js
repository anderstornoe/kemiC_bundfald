var svar_Array = [
    [
        ["NH<sub>4</sub>(NO<sub>3</sub>)<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>NO<sub>3</sub> (s)", "NH<sub>4</sub>NO<sub>3</sub> (s)"],
        ["NH<sub>4</sub>Cl<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>Cl (s)", "NH<sub>4</sub>Cl (s)"],
        ["NH<sub>4</sub>Br<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>Br (s)", "NH<sub>4</sub>Br (s)"],
        ["NH<sub>4</sub>I<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>I (s)", "NH<sub>4</sub>I (s)"],
        ["NH<sub>4</sub>SO<sub>4</sub> (s)", "NH<sub>4</sub>(SO<sub>4</sub>)<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> (s)"],
        ["NH<sub>4</sub>CO<sub>3</sub> (s)", "NH<sub>4</sub>(CO<sub>3</sub>)<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> (s)"],
        ["NH<sub>4</sub>S<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>S (s)", "NH<sub>4</sub>S (s)"],
        ["NH<sub>4</sub>PO<sub>4</sub> (s)", "NH<sub>4</sub>(PO<sub>4</sub>)<sub>3</sub> (s)", "(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub> (s)"]
    ],
    [
        ["Na(NO<sub>3</sub>)<sub>2</sub> (s)", "Na<sub>2</sub>NO<sub>3</sub> (s)", "NaNO<sub>3</sub> (s)"],
        ["NaCl<sub>2</sub> (s)", "Na<sub>2</sub>Cl (s)", "NaCl (s)"],
        ["NaBr<sub>2</sub> (s)", "Na<sub>2</sub>Br (s)", "NaBr (s)"],
        ["NaI<sub>2</sub> (s)", "Na<sub>2</sub>I (s)", "NaI (s)"],
        ["NaSO<sub>4</sub> (s)", "Na(SO<sub>4</sub>)<sub>2</sub> (s)", "Na<sub>2</sub>SO<sub>4</sub> (s)"],
        ["NaCO<sub>3</sub> (s)", "Na(CO<sub>3</sub>)<sub>2</sub> (s)", "Na<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Na(OH)<sub>2</sub> (s)", "Na<sub>2</sub>OH (s)", "NaOH (s)"],
        ["NaS<sub>2</sub> (s)", "Na<sub>2</sub>S (s)", "NaS (s)"],
        ["NaPO<sub>4</sub> (s)", "Na(PO<sub>4</sub>)<sub>3</sub> (s)", "Na<sub>3</sub>PO<sub>4</sub> (s)"]
    ],
    [
        ["K(NO<sub>3</sub>)<sub>2</sub> (s)", "K<sub>2</sub>NO<sub>3</sub> (s)", "KNO<sub>3</sub> (s)"],
        ["KCl<sub>2</sub> (s)", "K<sub>2</sub>Cl (s)", "KCl (s)"],
        ["KBr<sub>2</sub> (s)", "K<sub>2</sub>Br (s)", "KBr (s)"],
        ["KI<sub>2</sub> (s)", "K<sub>2</sub>I (s)", "KI (s)"],
        ["KSO<sub>4</sub> (s)", "K(SO<sub>4</sub>)<sub>2</sub> (s)", "K<sub>2</sub>SO<sub>4</sub> (s)"],
        ["KCO<sub>3</sub> (s)", "K(CO<sub>3</sub>)<sub>2</sub> (s)", "K<sub>2</sub>CO<sub>3</sub> (s)"],
        ["K(OH)<sub>2</sub> (s)", "K<sub>2</sub>OH (s)", "KOH (s)"],
        ["KS<sub>2</sub> (s)", "K<sub>2</sub>S (s)", "KS (s)"]
    ],
    [
        ["KPO<sub>4</sub> (s)", "K(PO<sub>4</sub>)<sub>3</sub> (s)", "K<sub>3</sub>PO<sub>4</sub> (s)"],
        ["Mg(NO<sub>3</sub>)<sub>2</sub> (s)", "Mg<sub>2</sub>NO<sub>3</sub> (s)", "MgNO<sub>3</sub> (s)"],
        ["MgCl<sub>2</sub> (s)", "Mg<sub>2</sub>Cl (s)", "MgCl (s)"],
        ["MgBr<sub>2</sub> (s)", "Mg<sub>2</sub>Br (s)", "MgBr (s)"],
        ["MgI<sub>2</sub> (s)", "Mg<sub>2</sub>I (s)", "MgI (s)"],
        ["MgSO<sub>4</sub> (s)", "Mg(SO<sub>4</sub>)<sub>2</sub> (s)", "Mg<sub>2</sub>SO<sub>4</sub> (s)"],
        ["MgCO<sub>3</sub> (aq)", "Mg<sub>2</sub>CO<sub>3</sub> (s)", "Mg(CO<sub>3</sub>)<sub>2</sub> (s)"],
        ["Mg(OH)<sub>2</sub> (aq)", "MgOH (s)", "Mg<sub>2</sub>OH (s)"],
        ["MgS (aq)", "Mg<sub>2</sub>S (s)", "MgS<sub>2</sub> (s)"],
        ["Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "Mg<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)", "MgPO<sub>4</sub> (s)"]
    ],
    [
        ["Zn(NO<sub>3</sub>)<sub>2</sub> (s)", "Zn<sub>2</sub>NO<sub>3</sub> (s)", "ZnNO<sub>3</sub> (s)"],
        ["ZnCl<sub>2</sub> (s)", "Zn<sub>2</sub>Cl (s)", "ZnCl (s)"],
        ["ZnBr<sub>2</sub> (s)", "Zn<sub>2</sub>Br (s)", "ZnBr (s)"],
        ["ZnI<sub>2</sub> (s)", "Zn<sub>2</sub>I (s)", "ZnI (s)"],
        ["ZnSO<sub>4</sub> (s)", "Zn(SO<sub>4</sub>)<sub>2</sub> (s)", "Zn<sub>2</sub>SO<sub>4</sub> (s)"],
        ["ZnCO<sub>3</sub> (aq)", "Zn<sub>2</sub>CO<sub>3</sub> (s)", "Zn(CO<sub>3</sub>)<sub>2</sub> (s)"],
        ["Zn(OH)<sub>2</sub> (aq)", "ZnOH (s)", "Zn<sub>2</sub>OH (s)"],
        ["ZnS (aq)", "Zn<sub>2</sub>S (s)", "ZnS<sub>2</sub> (s)"],
        ["Zn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "ZnPO<sub>4</sub> (s)", "Zn<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Cu(NO<sub>3</sub>)<sub>2</sub> (s)", "Cu<sub>2</sub>NO<sub>3</sub> (s)", "CuNO<sub>3</sub> (s)"],
        ["CuCl<sub>2</sub> (s)", "Cu<sub>2</sub>Cl (s)", "CuCl (s)"],
        ["CuBr<sub>2</sub> (s)", "Cu<sub>2</sub>Br (s)", "CuBr (s)"],
        ["mangler"],
        ["CuSO<sub>4</sub> (s)", "Cu(SO<sub>4</sub>)<sub>2</sub> (s)", "Cu<sub>2</sub>SO<sub>4</sub> (s)"],
        ["mangler"],
        ["Cu(OH)<sub>2</sub> (aq)", "CuOH (s)", "Cu<sub>2</sub>OH (s)"],
        ["CuS (aq)", "Cu<sub>2</sub>S (s)", "CuS<sub>2</sub> (s)"],
        ["Cu<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "CuPO<sub>4</sub> (s)", "Cu<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Fe(NO<sub>3</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>NO<sub>3</sub> (s)", "FeNO<sub>3</sub> (s)"],
        ["FeCl<sub>2</sub> (s)", "Fe<sub>2</sub>Cl (s)", "FeCl (s)"],
        ["FeBr<sub>2</sub> (s)", "Fe<sub>2</sub>Br (s)", "FeBr (s)"],
        ["FeI<sub>2</sub> (s)", "Fe<sub>2</sub>I (s)", "FeI (s)"],
        ["FeSO<sub>4</sub> (s)", "Fe(SO<sub>4</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>SO<sub>4</sub> (s)"],
        ["FeCO<sub>3</sub> (aq)", "Fe(CO<sub>3</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Fe(OH)<sub>2</sub> (aq)", "FeOH (s)", "Fe<sub>2</sub>OH (s)"],
        ["FeS (aq)", "Fe<sub>2</sub>S (s)", "FeS<sub>2</sub> (s)"],
        ["Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "FePO<sub>4</sub> (s)", "Fe<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Fe(NO<sub>3</sub>)<sub>3</sub> (s)", "Fe<sub>3</sub>NO<sub>3</sub> (s)", "FeNO<sub>3</sub> (s)"],
        ["FeCl<sub>3</sub> (s)", "Fe<sub>3</sub>Cl (s)", "FeCl (s)"],
        ["FeBr<sub>2</sub> (s)", "Fe<sub>2</sub>Br (s)", "FeBr (s)"],
        ["mangler"],
        ["FeSO<sub>4</sub> (s)", "Fe(SO<sub>4</sub>)<sub>3</sub> (s)", "Fe<sub>3</sub>SO<sub>4</sub> (s)"],
        ["mangler"],
        ["Fe(OH)<sub>3</sub> (aq)", "FeOH (s)", "Fe<sub>3</sub>OH (s)"],
        ["Fe<sub>2</sub>S<sub>3</sub> (aq)", "FeS (s)", "Fe<sub>3</sub>S<sub>2</sub> (s)"],
        ["FePO<sub>4</sub> (aq)", "Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Ca(NO<sub>3</sub>)<sub>2</sub> (s)", "Ca<sub>2</sub>NO<sub>3</sub> (s)", "CaNO<sub>3</sub> (s)"],
        ["CaCl<sub>2</sub> (s)", "Ca<sub>2</sub>Cl (s)", "CaCl (s)"],
        ["CaBr<sub>2</sub> (s)", "Ca<sub>2</sub>Br (s)", "CaBr (s)"],
        ["CaI<sub>2</sub> (s)", "Ca<sub>2</sub>I (s)", "CaI (s)"],
        ["CaSO<sub>4</sub> (aq)", "Ca(SO<sub>4</sub>)<sub>2</sub> (s)", "Ca<sub>2</sub>SO<sub>4</sub> (s)"],
        ["CaCO<sub>3</sub> (aq)", "Ca(CO<sub>3</sub>)<sub>2</sub> (s)", "Ca<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Ca(OH)<sub>2</sub> (aq)", "CaOH (s)", "Ca<sub>2</sub>OH (s)"],
        ["CaS (aq)", "Ca<sub>2</sub>S (s)", "CaS<sub>2</sub> (s)"],
        ["Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "CaPO<sub>4</sub> (s)", "Ca<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Ba(NO<sub>3</sub>)<sub>2</sub> (s)", "Ba<sub>2</sub>NO<sub>3</sub> (s)", "BaNO<sub>3</sub> (s)"],
        ["BaCl<sub>2</sub> (s)", "Ba<sub>2</sub>Cl (s)", "BaCl (s)"],
        ["BaBr<sub>2</sub> (s)", "Ba<sub>2</sub>Br (s)", "BaBr (s)"],
        ["BaI<sub>2</sub> (s)", "Ba<sub>2</sub>I (s)", "BaI (s)"],
        ["BaSO<sub>4</sub> (aq)", "Ba(SO<sub>4</sub>)<sub>2</sub> (s)", "Ba<sub>2</sub>SO<sub>4</sub> (s)"],
        ["BaCO<sub>3</sub> (aq)", "Ba(CO<sub>3</sub>)<sub>2</sub> (s)", "Ba<sub>2</sub>CO<sub>3</sub> (s)"],
        ["BaOH (s)", "Ba<sub>2</sub>OH (s)", "Ba(OH)<sub>2</sub> (s)"],
        ["BaS (aq)", "Ba<sub>2</sub>S (s)", "BaS<sub>2</sub> (s)"],
        ["Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "BaPO<sub>4</sub> (s)", "Ba<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Pb(NO<sub>3</sub>)<sub>2</sub> (s)", "Pb<sub>2</sub>NO<sub>3</sub> (s)", "PbNO<sub>3</sub> (s)"],
        ["PbCl<sub>2</sub> (aq)", "Pb<sub>2</sub>Cl (s)", "PbCl (s)"],
        ["PbBr<sub>2</sub> (aq)", "Pb<sub>2</sub>Br (s)", "PbBr (s)"],
        ["PbI<sub>2</sub> (aq)", "Pb<sub>2</sub>I (s)", "PbI (s)"],
        ["PbSO<sub>4</sub> (aq)", "Pb(SO<sub>4</sub>)<sub>2</sub> (s)", "Pb<sub>2</sub>SO<sub>4</sub> (s)"],
        ["PbCO<sub>3</sub> (aq)", "Pb(CO<sub>3</sub>)<sub>2</sub> (s)", "Pb<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Pb(OH)<sub>2</sub> (aq)", "PbOH (s)", "Pb<sub>2</sub>OH (s)"],
        ["PbS (aq)", "Pb<sub>2</sub>S (s)", "PbS<sub>2</sub> (s)"],
        ["Pb<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "PbPO<sub>4</sub> (s)", "Pb<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Ag(NO<sub>3</sub>)<sub>2</sub> (s)", "Ag<sub>2</sub>NO<sub>3</sub> (s)", "AgNO<sub>3</sub> (s)"],
        ["AgCl (aq)", "AgCl<sub>2</sub> (s)", "Ag<sub>2</sub>Cl (s)"],
        ["AgBr (aq)", "AgBr<sub>2</sub> (s)", "Ag<sub>2</sub>Br (s)"],
        ["AgI (aq)", "AgI<sub>2</sub> (s)", "Ag<sub>2</sub>I (s)"],
        ["Ag<sub>2</sub>SO<sub>4</sub> (aq)", "AgSO<sub>4</sub> (s)", "Ag(SO<sub>4</sub>)<sub>2</sub> (s)"],
        ["Ag<sub>2</sub>CO<sub>3</sub> (aq)", "AgCO<sub>3</sub> (s)", "Ag(CO<sub>3</sub>)<sub>2</sub> (s)"],
        ["mangler"],
        ["Ag<sub>2</sub>S (aq)", "AgS<sub>2</sub> (s)", "AgS (s)"],
        ["Ag<sub>3</sub>PO<sub>4</sub> (aq)", "AgPO<sub>4</sub> (s)", "Ag(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ]
];
