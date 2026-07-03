import { InspectionSection } from "./types";

export function getChecklistQuestions(): InspectionSection[] {
  return [
    {
      section: "1.0 Site Setup",
      description: "General site conditions and environment",
      items: [
        {
          id: "1.1",
          text: "Is the site entrance clearly marked and secured?",
          subtext: "Check for appropriate signage and functional gating/locks.",
          answer: "Yes",
          comment: "Main gate locked. Signage visible from primary road.",
          required: true,
          evidence: true,
          evidenceFile: "img_entrance.jpg"
        },
        {
          id: "1.2",
          text: "Are welfare facilities clean and adequate?",
          subtext: "Verify soap, water, and drying facilities are available.",
          answer: "No",
          comment: "Hand sanitizer dispenser in Block B is empty. Cleaning logs haven't been updated since yesterday.",
          required: true,
          hasWarning: true,
          hasActionRequired: true,
          evidenceFile: "img_welfare.jpg"
        },
        {
          id: "1.3",
          text: "Is the site perimeter fencing secure and appropriate for the area?",
          subtext: "Ensure no breach and fencing is stable.",
          answer: "Yes",
          comment: "No issues found with perimeter fencing.",
          required: true
        }
      ]
    },
    {
      section: "2.0 Access & Egress",
      description: "Safe movement of persons and vehicles",
      items: [
        {
          id: "2.1",
          text: "Are emergency exits and escape routes kept clear?",
          subtext: "Verify signs are illuminated and routes clear of debris.",
          answer: null,
          comment: "",
          required: true
        },
        {
          id: "2.2",
          text: "Is there adequate lighting throughout all access routes?",
          subtext: "Check during low light or night audits.",
          answer: null,
          comment: "",
          required: true
        },
        {
          id: "2.3",
          text: "Are traffic routes clearly segregated for pedestrians and vehicles?",
          subtext: "Observe signage, barriers, and crossing points.",
          answer: null,
          comment: "",
          required: false
        },
        {
          id: "2.4",
          text: "Are ladders/scaffolds inspected and safe for use?",
          subtext: "Check inspection tags and structural stability.",
          answer: null,
          comment: "",
          required: true
        }
      ]
    },
    {
      section: "3.0 Personal Protective Equipment (PPE)",
      description: "Compliance with safety gear requirements",
      items: [
        {
          id: "3.1",
          text: "Is mandatory PPE being worn by all operatives on site?",
          subtext: "Hard hat, hi-vis vest, and safety boots are minimum standard.",
          answer: null,
          comment: "",
          required: true
        },
        {
          id: "3.2",
          text: "Is mandatory PPE being worn by all operatives on site? (Detailed Check)",
          subtext: "Verify fit and condition of PPE.",
          answer: null,
          comment: "",
          required: false
        },
        {
          id: "3.3",
          text: "Is PPE in good condition and fit for purpose?",
          subtext: "Check for wear, tears, or structural damage.",
          answer: null,
          comment: "",
          required: true
        },
        {
          id: "3.4",
          text: "Are safety signs regarding mandatory PPE clearly displayed?",
          subtext: "Check signs at entrance points and work zones.",
          answer: null,
          comment: "",
          required: false
        },
        {
          id: "3.5",
          text: "Is damaged PPE reported and replaced promptly?",
          subtext: "Verify records or report procedures.",
          answer: null,
          comment: "",
          required: true
        }
      ]
    },
    {
      section: "4.0 Fire Safety",
      description: "Fire prevention controls and emergency gear",
      items: [
        {
          id: "4.1",
          text: "Are fire extinguishers in place, visible, and fully charged?",
          subtext: "Verify safety pins are intact and gauge is in the green.",
          answer: "Yes",
          comment: "All site extinguishers checked.",
          required: true,
          evidenceFile: "img_extinguisher.jpg"
        },
        {
          id: "4.2",
          text: "Is the fire alarm system operational and tested weekly?",
          subtext: "Check test logs and verify sounders work.",
          answer: "Yes",
          comment: "Weekly alarm test completed.",
          required: true
        },
        {
          id: "4.3",
          text: "Are fire wardens trained and their names displayed?",
          subtext: "Confirm poster on main notice board.",
          answer: "Yes",
          comment: "Poster is current.",
          required: false
        },
        {
          id: "4.4",
          text: "Are hot work permits issued where required?",
          subtext: "Review permit folder and active site works.",
          answer: "Yes",
          comment: "Active permit in place for welding area.",
          required: true
        }
      ]
    },
    {
      section: "5.0 Electrical & Hand Tools",
      description: "Safe usage and maintenance of work equipment",
      items: [
        {
          id: "5.1",
          text: "Are all electrical cables off the ground or covered?",
          subtext: "Ensure cables do not present trip or water exposure hazards.",
          answer: "Yes",
          comment: "Slinging utilized for overhead lines.",
          required: true
        },
        {
          id: "5.2",
          text: "Are hand tools inspected for damage before use?",
          subtext: "Check handles, guards, and power cables.",
          answer: "Yes",
          comment: "Daily toolbox talks highlight tool inspection.",
          required: true,
          evidenceFile: "img_tool_check.jpg"
        },
        {
          id: "5.3",
          text: "Is 110V equipment used for portable electric tools?",
          subtext: "Verify transformers are in place.",
          answer: "Yes",
          comment: "Standard site transformers active.",
          required: true
        },
        {
          id: "5.4",
          text: "Are PAT testing records up to date?",
          subtext: "Check labels on tools and safety logs.",
          answer: "Yes",
          comment: "All tools checked and tagged.",
          required: true
        }
      ]
    },
    {
      section: "6.0 Hazardous Substances (COSHH)",
      description: "Control of substances hazardous to health",
      items: [
        {
          id: "6.1",
          text: "Are COSHH assessments available for all substances in use?",
          subtext: "Verify folder access for site managers and operatives.",
          answer: null,
          comment: "",
          required: true
        },
        {
          id: "6.2",
          text: "Are hazardous substances stored securely in locked cabinets?",
          subtext: "Verify cabinet doors are locked when not in use.",
          answer: "No",
          comment: "Cabinet in Sector 3 found unlocked.",
          required: true,
          hasWarning: true,
          hasActionRequired: true
        },
        {
          id: "6.3",
          text: "Is appropriate spill response kit available near storage?",
          subtext: "Check contents and positioning of spill kits.",
          answer: null,
          comment: "",
          required: true
        },
        {
          id: "6.4",
          text: "Are operatives trained in COSHH hazards?",
          subtext: "Verify training records or certificates.",
          answer: null,
          comment: "",
          required: false
        }
      ]
    }
  ];
}
