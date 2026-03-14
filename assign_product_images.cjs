#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const PRODUCTS_PATH = path.join(__dirname, 'src/data/products.json');
const products = JSON.parse(fs.readFileSync(PRODUCTS_PATH, 'utf8'));

function img(filename) { return `assets/products/${filename}`; }

// 4 unique filenames per product type using all available assets
const SETS = {
  // Copper ring lugs – variety of angles
  copper_ring_lug: [img('copper_ring_lug.png'), img('lug_ring_01.jpg'), img('lug_copper_03.jpg'), img('lug_terminal_04.jpg')],
  copper_ring_lug_large: [img('copper_ring_lug.png'), img('lug_connector_02.jpg'), img('lug_copper_03.jpg'), img('lug_ring_01.jpg')],
  // Aluminium ring lugs
  alu_ring_lug: [img('aluminium_ring_lug.png'), img('lug_aluminium_06.jpg'), img('lug_ring_01.jpg'), img('lug_industrial_05.jpg')],
  // Copper pin lugs
  copper_pin_lug: [img('copper_pin_lug.png'), img('lug_terminal_04.jpg'), img('lug_copper_03.jpg'), img('lug_ring_01.jpg')],
  // Insulated ring lugs
  insulated_ring_lug: [img('insulated_ring_lug.png'), img('lug_terminal_04.jpg'), img('insulated_pin_lug.png'), img('lug_ring_01.jpg')],
  // Insulated pin lugs
  insulated_pin_lug: [img('insulated_pin_lug.png'), img('insulated_ring_lug.png'), img('lug_terminal_04.jpg'), img('lug_copper_03.jpg')],
  // Insulated flat lugs
  insulated_flat_lug: [img('insulated_pin_lug.png'), img('insulated_ring_lug.png'), img('lug_terminal_04.jpg'), img('lug_connector_02.jpg')],
  // Fork U-type lugs
  fork_lug: [img('fork_lug.png'), img('insulated_pin_lug.png'), img('lug_terminal_04.jpg'), img('lug_copper_03.jpg')],
  // Bimetallic lugs
  bimetallic_lug: [img('bimetallic_lug.png'), img('lug_aluminium_06.jpg'), img('lug_ring_01.jpg'), img('lug_industrial_05.jpg')],
  // Copper thimble
  copper_thimble: [img('copper_ring_lug.png'), img('lug_copper_03.jpg'), img('bimetallic_lug.png'), img('lug_ring_01.jpg')],
  // Heavy duty copper lug
  heavy_duty_lug: [img('copper_ring_lug.png'), img('bimetallic_lug.png'), img('lug_connector_02.jpg'), img('lug_industrial_05.jpg')],
  
  // Wires
  copper_wire: [img('copper_wire_havells.png'), img('wire_electrical_01.jpg'), img('wire_copper_04.jpg'), img('wire_cable_02.jpg')],
  aluminium_wire: [img('aluminium_wire.png'), img('cable_armoured_06.jpg'), img('cable_coil_05.jpg'), img('wire_industrial_03.jpg')],
  armoured_cable: [img('armoured_cable.png'), img('cable_armoured_06.jpg'), img('aluminium_wire.png'), img('cable_coil_05.jpg')],
  flexible_cable: [img('flexible_copper_cable.png'), img('wire_cable_02.jpg'), img('wire_electrical_01.jpg'), img('cable_coil_05.jpg')],
  cable_joint: [img('armoured_cable.png'), img('heat_shrink_sleeve.png'), img('wire_industrial_03.jpg'), img('flexible_copper_cable.png')],
  
  // Switchgear
  hrc_fuse: [img('hrc_ns_fuse.png'), img('fuse_06.jpg'), img('fuse_box_02.jpg'), img('mcb_breaker_03.jpg')],
  mccb: [img('dc_mccb_schneider.png'), img('switchgear_panel_01.jpg'), img('mccb_05.jpg'), img('switchgear_04.jpg')],
  
  // Glands
  brass_gland: [img('brass_cable_gland.png'), img('brass_gland_01.jpg'), img('gland_brass_04.jpg'), img('gland_dc_03.jpg')],
  
  // Cable ties
  cable_tie: [img('nylon_cable_tie.png'), img('cable_tie_01.jpg'), img('zip_tie_03.jpg'), img('nylon_tie_02.jpg')],
  thick_cable_tie: [img('nylon_cable_tie.png'), img('nylon_strap_06.jpg'), img('tie_wrap_05.jpg'), img('cable_strap_04.jpg')],
  
  // Cable accessories
  heat_shrink: [img('heat_shrink_sleeve.png'), img('heat_shrink_01.jpg'), img('shrinkable_05.jpg'), img('pvc_sleeve_03.jpg')],
  marking_sleeve: [img('pvc_marking_sleeve.png'), img('marking_sleeve_02.jpg'), img('cable_marker_04.jpg'), img('pvc_sleeve_03.jpg')],
  stop_cock: [img('pvc_marking_sleeve.png'), img('stop_cock_06.jpg'), img('cable_marker_04.jpg'), img('heat_shrink_sleeve.png')],
  
  // Lighting
  led_flood: [img('flood_light_03.jpg'), img('street_light_04.jpg'), img('led_panel_01.jpg'), img('led_bulb_02.jpg')],
  led_panel: [img('led_panel_01.jpg'), img('batten_light_06.jpg'), img('led_bulb_02.jpg'), img('flood_light_03.jpg')],
  led_street: [img('street_light_04.jpg'), img('flood_light_03.jpg'), img('led_panel_01.jpg'), img('led_bulb_02.jpg')],
  led_bulb: [img('led_bulb_02.jpg'), img('led_panel_01.jpg'), img('batten_light_06.jpg'), img('led_strip_05.jpg')],
  led_batten: [img('batten_light_06.jpg'), img('led_strip_05.jpg'), img('led_panel_01.jpg'), img('led_bulb_02.jpg')],
  led_fazer_neo: [img('led_panel_01.jpg'), img('led_bulb_02.jpg'), img('batten_light_06.jpg'), img('led_strip_05.jpg')],
  
  // Plugs & Sockets
  ind_plug_3pin: [img('industrial_plug_01.jpg'), img('plug_16a_03.jpg'), img('connector_06.jpg'), img('socket_panel_02.jpg')],
  ind_socket_3pin: [img('socket_panel_02.jpg'), img('socket_32a_04.jpg'), img('connector_06.jpg'), img('industrial_plug_01.jpg')],
  ind_plug_5pin: [img('industrial_plug_01.jpg'), img('connector_06.jpg'), img('socket_32a_04.jpg'), img('extension_05.jpg')],
  ind_socket_5pin: [img('socket_32a_04.jpg'), img('socket_panel_02.jpg'), img('extension_05.jpg'), img('industrial_plug_01.jpg')],
  extension_board: [img('extension_05.jpg'), img('socket_panel_02.jpg'), img('extension_board_03.jpg'), img('db_panel_02.jpg')],
  
  // Safety
  safety_gloves: [img('safety_gloves_01.jpg'), img('safety_gear_04.jpg'), img('safety_equipment_03.jpg'), img('insulating_mat_02.jpg')],
  insulating_mat: [img('insulating_mat_02.jpg'), img('safety_gloves_01.jpg'), img('safety_gear_04.jpg'), img('safety_equipment_03.jpg')],
  
  // Distribution board
  dist_board: [img('dist_board_01.jpg'), img('db_panel_02.jpg'), img('db_industrial_04.jpg'), img('extension_board_03.jpg')],
  
  // Power generation
  generator: [img('generator_01.jpg'), img('generator_3ph_03.jpg'), img('diesel_gen_02.jpg'), img('genset_04.jpg')],
  
  // Tools
  hacksaw: [img('hacksaw_01.jpg'), img('hardware_tool_03.jpg'), img('saddle_clamp_02.jpg'), img('gi_saddle_04.jpg')],
  saddle: [img('saddle_clamp_02.jpg'), img('gi_saddle_04.jpg'), img('hacksaw_01.jpg'), img('hardware_tool_03.jpg')],
};

function getImages(name) {
  const n = name.toLowerCase();

  // Armoured cable
  if (n.includes('armoured') || n.includes('armoure')) return SETS.armoured_cable;
  // 33kV joint kit
  if (n.includes('joint kit') || n.includes('raychem')) return SETS.cable_joint;
  // Flexible/multi-core copper cable
  if ((n.includes('flexible') || n.includes('flaxible') || n.includes('3cx4'))) return SETS.flexible_cable;
  if (n.includes('1.5x4') || (n.includes('4 core') && n.includes('wire'))) return SETS.flexible_cable;
  if (n.includes('2.5 sqmm 2 core')) return SETS.flexible_cable;
  // Aluminium multi-core
  if (n.includes('16 sqmm 4 core alum') || n.includes('alum') && n.includes('wire')) return SETS.aluminium_wire;
  if (n.includes('10sqmm x3') || n.includes('16sqmm x4')) return SETS.aluminium_wire;
  // Copper wire (Havells / single conductor)
  if ((n.includes('hevells') || n.includes('havells')) && n.includes('wire')) return SETS.copper_wire;
  if (n.includes('.75mm') || n.includes('1mm ') || n.includes('1.5mm') || n.includes('2.5mm')) {
    if (n.includes('wire')) return SETS.copper_wire;
  }
  if (n.includes('16 sq mm cooper pvc')) return SETS.copper_wire;

  // Bimetallic
  if (n.includes('bimetal')) return SETS.bimetallic_lug;
  // Thimble
  if (n.includes('thimble')) return SETS.copper_thimble;
  // Heavy duty large lug
  if (n.includes('heavy duty') || n.includes('300sqmm') || n.includes('long barr')) return SETS.heavy_duty_lug;
  // Fork/U-type
  if (n.includes('fork') || n.includes('(u)') || n.includes('(u) type')) return SETS.fork_lug;
  // Insulated flat
  if (n.includes('insu') && n.includes('flat')) return SETS.insulated_flat_lug;
  // Insulated ring
  if ((n.includes('insu') || n.includes('ring insu') || n.includes('insu. ligs') || n.includes('insu. ring')) && n.includes('ring')) return SETS.insulated_ring_lug;
  // Insulated pin
  if ((n.includes('insu') || n.includes('pin insu')) && n.includes('pin')) return SETS.insulated_pin_lug;
  // 1mm PVC insulated lug 1008 (insulated ring type)
  if (n.includes('1mm pvc insulated') || n.includes('1008')) return SETS.insulated_ring_lug;
  // 2.5sqmm ring/ring lugs (non-insulated)
  if (n.includes('ring') && n.includes('lug') && (n.includes('cu') || n.includes('copper'))) return SETS.copper_ring_lug;
  // Copper ring lugs (generic)
  if (n.includes('ring') && (n.includes('lug') || n.includes('lugs') || n.includes('ligs'))) return SETS.copper_ring_lug;
  // Aluminium ring lugs
  if (n.includes('alu') && (n.includes('ring') || n.includes('lug') || n.includes('lugs'))) return SETS.alu_ring_lug;
  // Pin lugs (generic copper, no insulation)
  if (n.includes('pin') && (n.includes('lug') || n.includes('type'))) return SETS.copper_pin_lug;
  // Generic lug/lugs (catch-all)
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

// Print breakdown
const breakdown = {};
updated.forEach(p => {
  const key = p.images[0].split('/').pop();
  breakdown[key] = (breakdown[key] || []);
  breakdown[key].push(p.name);
});
Object.entries(breakdown).sort((a,b) => b[1].length - a[1].length).forEach(([img, names]) => {
  console.log(`\n📦 ${img} (${names.length} products):`);
  names.forEach(n => console.log(`   - ${n}`));
});

fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(updated, null, 2));
console.log('\n✅ products.json updated!');
console.log(`   ${updated.length} products, each with 4 images`);
