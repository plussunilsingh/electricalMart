#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PRODUCTS_PATH = path.join(__dirname, 'src/data/products.json');
const products = JSON.parse(fs.readFileSync(PRODUCTS_PATH, 'utf8'));

function img(filename) { return `assets/products/${filename}`; }

const SETS = {
  // Copper ring lugs
  copper_ring_lug: [img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png')],
  copper_ring_lug_large: [img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png')],
  // Aluminium ring lugs
  alu_ring_lug: [img('aluminium_ring_lug.png'), img('aluminium_ring_lug.png'), img('aluminium_ring_lug.png'), img('aluminium_ring_lug.png')],
  // Copper pin lugs
  copper_pin_lug: [img('copper_pin_lug.png'), img('copper_pin_lug.png'), img('copper_pin_lug.png'), img('copper_pin_lug.png')],
  // Insulated ring lugs
  insulated_ring_lug: [img('insulated_ring_lug.png'), img('insulated_ring_lug.png'), img('insulated_ring_lug.png'), img('insulated_ring_lug.png')],
  // Insulated pin lugs
  insulated_pin_lug: [img('insulated_pin_lug.png'), img('insulated_pin_lug.png'), img('insulated_pin_lug.png'), img('insulated_pin_lug.png')],
  // Insulated flat lugs
  insulated_flat_lug: [img('insulated_pin_lug.png'), img('insulated_ring_lug.png'), img('insulated_pin_lug.png'), img('insulated_ring_lug.png')],
  // Fork U-type lugs
  fork_lug: [img('fork_lug.png'), img('fork_lug.png'), img('fork_lug.png'), img('fork_lug.png')],
  // Bimetallic lugs
  bimetallic_lug: [img('bimetallic_lug.png'), img('bimetallic_lug.png'), img('bimetallic_lug.png'), img('bimetallic_lug.png')],
  // Copper thimble
  copper_thimble: [img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png')],
  // Heavy duty copper lug
  heavy_duty_lug: [img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png'), img('copper_ring_lug.png')],
  
  // Wires
  copper_wire: [img('copper_wire_havells.png'), img('copper_wire_havells.png'), img('copper_wire_havells.png'), img('copper_wire_havells.png')],
  aluminium_wire: [img('aluminium_wire.png'), img('aluminium_wire.png'), img('aluminium_wire.png'), img('aluminium_wire.png')],
  armoured_cable: [img('armoured_cable.png'), img('armoured_cable.png'), img('armoured_cable.png'), img('armoured_cable.png')],
  flexible_cable: [img('flexible_copper_cable.png'), img('flexible_copper_cable.png'), img('flexible_copper_cable.png'), img('flexible_copper_cable.png')],
  cable_joint: [img('armoured_cable.png'), img('armoured_cable.png'), img('armoured_cable.png'), img('armoured_cable.png')],
  
  // Switchgear
  hrc_fuse: [img('hrc_ns_fuse.png'), img('hrc_ns_fuse.png'), img('hrc_ns_fuse.png'), img('hrc_ns_fuse.png')],
  mccb: [img('dc_mccb_schneider.png'), img('dc_mccb_schneider.png'), img('dc_mccb_schneider.png'), img('dc_mccb_schneider.png')],
  
  // Glands
  brass_gland: [img('brass_cable_gland.png'), img('brass_cable_gland.png'), img('brass_cable_gland.png'), img('brass_cable_gland.png')],
  
  // Cable ties
  cable_tie: [img('nylon_cable_tie.png'), img('nylon_cable_tie.png'), img('nylon_cable_tie.png'), img('nylon_cable_tie.png')],
  thick_cable_tie: [img('nylon_cable_tie.png'), img('nylon_cable_tie.png'), img('nylon_cable_tie.png'), img('nylon_cable_tie.png')],
  
  // Cable accessories
  heat_shrink: [img('heat_shrink_sleeve.png'), img('heat_shrink_sleeve.png'), img('heat_shrink_sleeve.png'), img('heat_shrink_sleeve.png')],
  marking_sleeve: [img('pvc_marking_sleeve.png'), img('pvc_marking_sleeve.png'), img('pvc_marking_sleeve.png'), img('pvc_marking_sleeve.png')],
  stop_cock: [img('nylon_stop_cock.png'), img('nylon_stop_cock.png'), img('nylon_stop_cock.png'), img('nylon_stop_cock.png')],
  
  // Lighting (NEW IMAGES)
  led_flood: [img('street_light_led.png'), img('street_light_led.png'), img('street_light_led.png'), img('street_light_led.png')],
  led_panel: [img('led_panel_light.png'), img('led_panel_light.png'), img('led_panel_light.png'), img('led_panel_light.png')],
  led_street: [img('street_light_led.png'), img('street_light_led.png'), img('street_light_led.png'), img('street_light_led.png')],
  led_bulb: [img('led_bulb_light.png'), img('led_bulb_light.png'), img('led_bulb_light.png'), img('led_bulb_light.png')],
  led_batten: [img('led_batten_light.png'), img('led_batten_light.png'), img('led_batten_light.png'), img('led_batten_light.png')],
  led_fazer_neo: [img('led_panel_light.png'), img('led_panel_light.png'), img('led_panel_light.png'), img('led_panel_light.png')],
  
  // Plugs & Sockets (NEW IMAGES)
  ind_plug_3pin: [img('industrial_plug.png'), img('industrial_plug.png'), img('industrial_plug.png'), img('industrial_plug.png')],
  ind_socket_3pin: [img('industrial_socket.png'), img('industrial_socket.png'), img('industrial_socket.png'), img('industrial_socket.png')],
  ind_plug_5pin: [img('industrial_plug.png'), img('industrial_plug.png'), img('industrial_plug.png'), img('industrial_plug.png')],
  ind_socket_5pin: [img('industrial_socket.png'), img('industrial_socket.png'), img('industrial_socket.png'), img('industrial_socket.png')],
  extension_board: [img('extension_board.png'), img('extension_board.png'), img('extension_board.png'), img('extension_board.png')],
  
  // Safety (NEW IMAGES)
  safety_gloves: [img('electrical_safety_gloves.png'), img('electrical_safety_gloves.png'), img('electrical_safety_gloves.png'), img('electrical_safety_gloves.png')],
  insulating_mat: [img('insulating_mat_blue.png'), img('insulating_mat_blue.png'), img('insulating_mat_blue.png'), img('insulating_mat_blue.png')],
  
  // Distribution board (NEW IMAGES)
  dist_board: [img('distribution_board.png'), img('distribution_board.png'), img('distribution_board.png'), img('distribution_board.png')],
  
  // Power generation (NEW IMAGES)
  generator: [img('diesel_generator.png'), img('diesel_generator.png'), img('diesel_generator.png'), img('diesel_generator.png')],
  
  // Tools (NEW IMAGES)
  hacksaw: [img('hack_saw_frame.png'), img('hack_saw_frame.png'), img('hack_saw_frame.png'), img('hack_saw_frame.png')],
  saddle: [img('gi_saddle_clamp.png'), img('gi_saddle_clamp.png'), img('gi_saddle_clamp.png'), img('gi_saddle_clamp.png')],
};

function getImages(name) {
  const n = name.toLowerCase();

  // Wires & Cables
  if (n.includes('armoured') || n.includes('armoure')) return SETS.armoured_cable;
  if (n.includes('joint kit') || n.includes('raychem')) return SETS.cable_joint;
  if ((n.includes('flexible') || n.includes('flaxible') || n.includes('3cx4'))) return SETS.flexible_cable;
  if (n.includes('1.5x4') || (n.includes('4 core') && n.includes('wire'))) return SETS.flexible_cable;
  if (n.includes('2.5 sqmm 2 core')) return SETS.flexible_cable;
  if (n.includes('16 sqmm 4 core alum') || n.includes('alum') && n.includes('wire')) return SETS.aluminium_wire;
  if (n.includes('10sqmm x3') || n.includes('16sqmm x4')) return SETS.aluminium_wire;
  if ((n.includes('hevells') || n.includes('havells')) && n.includes('wire')) return SETS.copper_wire;
  if (n.includes('.75mm') || n.includes('1mm ') || n.includes('1.5mm') || n.includes('2.5mm')) {
    if (n.includes('wire')) return SETS.copper_wire;
  }
  if (n.includes('16 sq mm cooper pvc')) return SETS.copper_wire;

  // Lugs
  if (n.includes('bimetal')) return SETS.bimetallic_lug;
  if (n.includes('thimble')) return SETS.copper_thimble;
  if (n.includes('heavy duty') || n.includes('300sqmm') || n.includes('long barr')) return SETS.heavy_duty_lug;
  if (n.includes('fork') || n.includes('(u)') || n.includes('(u) type')) return SETS.fork_lug;
  if (n.includes('insu') && n.includes('flat')) return SETS.insulated_flat_lug;
  if ((n.includes('insu') || n.includes('ring insu') || n.includes('insu. ligs') || n.includes('insu. ring')) && n.includes('ring')) return SETS.insulated_ring_lug;
  if ((n.includes('insu') || n.includes('pin insu')) && n.includes('pin')) return SETS.insulated_pin_lug;
  if (n.includes('1mm pvc insulated') || n.includes('1008')) return SETS.insulated_ring_lug;
  if (n.includes('ring') && n.includes('lug') && (n.includes('cu') || n.includes('copper'))) return SETS.copper_ring_lug;
  // EXPLICIT FIX for ALU Ring Lugs
  if (n.includes('alu') && (n.includes('ring') || n.includes('lug') || n.includes('lugs'))) return SETS.alu_ring_lug;
  if (n.includes('ring') && (n.includes('lug') || n.includes('lugs') || n.includes('ligs'))) return SETS.copper_ring_lug;
  if (n.includes('pin') && (n.includes('lug') || n.includes('type'))) return SETS.copper_pin_lug;
  if (n.includes('lug') || n.includes('lugs') || n.includes('ligs')) {
    if (n.includes('150sqmm') || n.includes('300')) return SETS.heavy_duty_lug;
    return SETS.copper_ring_lug_large;
  }

  // Switchgear
  if (n.includes('mccb') || n.includes('schneider')) return SETS.mccb;
  if (n.includes('fuse') || n.includes('siemens') || n.includes('ftc')) return SETS.hrc_fuse;

  // Glands
  if (n.includes('gland') || n.includes('brass')) return SETS.brass_gland;

  // Cable ties
  if (n.includes('thick') || n.includes('200mm') || n.includes('250mm') || n.includes('300mm') || n.includes('200x') || n.includes('300x') || n.includes('250x')) return SETS.thick_cable_tie;
  if (n.includes('cable tie') || n.includes('snap lock') || n.includes('zip') || n.includes('x2.5mm') || n.includes('x3 mm') || n.includes('x3.6')) return SETS.cable_tie;

  // Cable accessories
  if (n.includes('heat shrink') || n.includes('shrinkable') || n.includes('woer')) return SETS.heat_shrink;
  if (n.includes('marking sleeve')) return SETS.marking_sleeve;
  if (n.includes('stop cock')) return SETS.stop_cock;

  // Lighting
  if (n.includes('flood')) return SETS.led_flood;
  if (n.includes('street')) return SETS.led_street;
  if (n.includes('batten')) return SETS.led_batten;
  if (n.includes('fazer neo') || n.includes('panel') || n.includes('pdlm') || n.includes('ppam')) return SETS.led_panel;
  if (n.includes('bulb')) return SETS.led_bulb;
  if (n.includes('led')) return SETS.led_panel;

  // Plugs & sockets
  if (n.includes('32a') && (n.includes('plug') || n.includes('plag'))) return SETS.ind_plug_5pin;
  if (n.includes('32a') && n.includes('socket')) return SETS.ind_socket_5pin;
  if ((n.includes('plug') || n.includes('plag') || n.includes('16/3') || n.includes('16/5'))) return SETS.ind_plug_3pin;
  if (n.includes('socket') || n.includes('connector socket') || (n.includes('16/3') && n.includes('socket'))) return SETS.ind_socket_3pin;
  if (n.includes('extension board') || n.includes('1phase') || n.includes('board 20a')) return SETS.extension_board;

  // Safety
  if (n.includes('gloves') || n.includes('33kv gloves')) return SETS.safety_gloves;
  if (n.includes('insulating mat') || n.includes('mat,')) return SETS.insulating_mat;

  // Distribution boards
  if (n.includes('distribution') || n.includes('board')) return SETS.dist_board;

  // Power generation
  if (n.includes('generator') || n.includes('genrerator') || n.includes('diesel')) return SETS.generator;

  // Tools
  if (n.includes('hack saw') || n.includes('hacksaw')) return SETS.hacksaw;
  if (n.includes('saddle')) return SETS.saddle;

  // Final fallback
  return SETS.copper_ring_lug;
}

const updated = products.map(prod => ({ ...prod, images: getImages(prod.name) }));

const breakdown = {};
updated.forEach(p => {
  const key = p.images[0].split('/').pop();
  breakdown[key] = (breakdown[key] || []);
  breakdown[key].push(p.name);
});
Object.entries(breakdown).sort((a,b) => b[1].length - a[1].length).forEach(([img, names]) => {
  console.log(`\n📦 ${img} (${names.length} products)`);
});

fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(updated, null, 2));
console.log('\n✅ products.json updated to use ALL AI GENERATED images!');
